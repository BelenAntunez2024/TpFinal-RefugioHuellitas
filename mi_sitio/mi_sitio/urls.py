# mi_sitio/urls.py
from django.contrib import admin
from django.urls import path
from paginas import views  # Importamos las vistas de nuestra app 'paginas'

urlpatterns = [
    # Ruta para el panel de administración de Django
    path('admin/', admin.site.urls),
    
    # 1. Ruta vacía '' significa la raíz del sitio (Ej: http://127.0.0.1:8000/)
    path('', views.pagina_home, name='home'),
    
    # 2. Ruta para ingresar al catálogo (Ej: http://127.0.0.1:8000/mascotas/)
    path('mascotas/', views.pagina_mascotas, name='mascotas'),
    
    # 3. Ruta para el formulario de contacto (Ej: http://127.0.0.1:8000/contacto/)
    path('contacto/', views.pagina_contacto, name='contacto'),
]
