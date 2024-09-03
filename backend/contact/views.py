from django.core.mail import send_mail
from django.http import JsonResponse

def send_contact_email(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        send_mail(
            f'Message from {name}',
            message,
            email,
            ['your-email@example.com'],  # Replace with your email
            fail_silently=False,
        )
        return JsonResponse({'status': 'success'})
