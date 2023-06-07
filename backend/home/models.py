from django.conf import settings
from django.db import models
class Mithilesh(models.Model):
    'Generated Model'
    studio = models.BigIntegerField()
    dataModel = models.BooleanField(null=True,blank=True,)
