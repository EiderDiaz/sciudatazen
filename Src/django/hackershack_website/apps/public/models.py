from django.db import models
from django.contrib.auth.models import User
from django.http import request



class IRASE(models.Model):
    Gp_id = models.ForeignKey(Geopunto, on_delete=models.SET_NULL, blank=True, null=True)
    nombre = models.ForeignKey(IRASE_vars, on_delete=models.SET_NULL, blank=True, null=True)
    ponderacion = models.FloatField(null=True)
    ind_riesgo = models.FloatField(null=True)

    def __str__(self):
        return self.name


class IRASE_vars(models.Model):
    nombre = models.OneToOneField(IRASE, on_delete=models.CASCADE, related_name="nombre")
    minimo = models.FloatField()
    maximo = models.FloatField()
    imp_minimo = models.FloatField()
    impo_maximo = models.FloatField()
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Geopunto(models.Model):
    #foreign key (owner)
    Gp_id = models.OneToManyField(IRASE, on_delete=models.CASCADE, related_name="Gp_id")
    lat = models.FloatField()
    lang = models.FloatField()
    pend = models.FloatField()
    ITA = models.FloatField()
    
  

class Gp_agua(models.Model):
    #foreign key 
    Gp_id = models.ForeignKey(Geopunto, on_delete=models.SET_NULL, blank=True, null=True)
    bal_hidric = models.FloatField()
    ind_topogra = models.FloatField()
    id_cuenca = models.IntegerField()
    tipo = models.CharField(max_length=20)
    clima_tipo = models.CharField(max_length=40)
    rangos = models.CharField()
    desc_a02 = models.CharField()
    esc_nat = models.FloatField()
    peligro_in = models.CharField()

class Gp_suelo(models.Model):
    #foreign key 
    Gp_id = models.ForeignKey(Geopunto, on_delete=models.SET_NULL, blank=True, null=True)
    claves_tem = models.CharField()
    preci_rang = models.CharField()
    dem_1km = models.IntegerField()

class Gp_aire(models.Model):
    #foreign key 
    Gp_id = models.ForeignKey(Geopunto, on_delete=models.SET_NULL, blank=True, null=True)
    pendiente = models.FloatField()
    inc_nie = models.FloatField()
    materia_org = models.FloatField()

    grado = models.CharField()
    edi = models.FloatField()
    class_prp = models.CharField()
    eimean = models.FloatField()






