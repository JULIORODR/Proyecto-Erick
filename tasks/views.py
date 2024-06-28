from rest_framework import viewsets
from .serializer import Taskserializers
from .models import Task

# Create your views here.
class Taskview(viewsets.ModelViewSet):
    serializer_class = Taskserializers
    queryset = Task.objects.all()
      
    

    