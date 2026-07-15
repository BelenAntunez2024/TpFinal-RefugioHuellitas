# paginas/views.py
from django.shortcuts import render

# Vista para la página de Inicio (Home)
def pagina_home(request):
    # Esta función recibe la solicitud del usuario y le responde
    # renderizando (mostrando) el archivo HTML 'home.html'
    return render(request, 'home.html')

# Vista para la sección de Mascotas en adopción
def pagina_mascotas(request):
    # Renderiza la plantilla mascotas.html que contiene el catálogo de animales
    return render(request, 'mascotas.html')

# Vista para el Formulario de Adopción
def pagina_contacto(request):
    # Renderiza la plantilla contacto.html con el formulario interactivo
    return render(request, 'contacto.html')

#Vista para la sección Nosotros
def pagina_nosotros(request):
    return render(request, 'nosotros.html')

# Vista para la sección Cómo Ayudar
def pagina_ayudar(request):
    return render(request, 'ayudar.html')