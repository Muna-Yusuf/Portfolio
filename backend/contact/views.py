import json
import logging
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from mailjet_rest import Client
from django.conf import settings

logger = logging.getLogger(__name__)

@csrf_exempt
@require_POST
def send_contact_email(request):
    try:
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        if not name or not email or not message:
            return JsonResponse({'status': 'error', 'message': 'All fields (name, email, message) are required'}, status=400)

        if '@' not in email:
            return JsonResponse({'status': 'error', 'message': 'Invalid email address'}, status=400)

        mailjet = Client(auth=(settings.MAILJET_API_KEY, settings.MAILJET_SECRET_KEY), version='v3.1')

        data = {
            'Messages': [
                {
                    "From": {
                        "Email": settings.EMAIL_HOST_USER,
                        "Name": "Your Name"
                    },
                    "To": [
                        {
                            "Email": "muna.y.a.jim@gmail.com",
                            "Name": "Recipient Name"
                        }
                    ],
                    "Subject": f"Message from {name}",
                    "TextPart": message,
                    "HTMLPart": f"<p>{message}</p>"
                }
            ]
        }

        result = mailjet.send.create(data=data)
        response = result.json()
        logger.info(f"Mailjet response: {response}")

        if response.get('Messages')[0].get('Status') == 'success':
            return JsonResponse({'status': 'success'}, status=200)
        else:
            error_message = response.get('Messages')[0].get('Errors', 'Unknown error')
            return JsonResponse({'status': 'error', 'message': error_message}, status=500)

    except json.JSONDecodeError:
        logger.error('Invalid JSON')
        return JsonResponse({'status': 'error', 'message': 'Invalid JSON'}, status=400)
    except Exception as e:
        logger.error(f"Exception: {str(e)}")
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)
