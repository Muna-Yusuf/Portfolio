from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('contact.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
]
