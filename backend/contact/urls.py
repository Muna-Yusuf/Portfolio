from django.urls import path
from .views import send_contact_email

urlpatterns = [
    path('contact/send_contact_email/', send_contact_email, name='send_contact_email'),
]
