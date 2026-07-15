# mi_sitio/urls.py
from django.contrib import admin
from django.urls import path
from paginas import views

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('', views.pagina_home, name='home'),
    path('mascotas/', views.pagina_mascotas, name='mascotas'),
    path('contacto/', views.pagina_contacto, name='contacto'),
    
    # NUEVAS RUTAS CONECTADAS:
    path('nosotros/', views.pagina_nosotros, name='nosotros'),
    path('ayudar/', views.pagina_ayudar, name='ayudar'),
]