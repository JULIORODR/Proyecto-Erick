from rest_framework import serializers
from .models import Task

class Taskserializers(serializers.ModelSerializer):
    class meta:
        model = Task
        #fields = ('id', 'title', 'description', 'done')
        fields = '__all__' 