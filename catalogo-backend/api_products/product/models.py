from django.db import models

class Product(models.Model):
    image = models.ImageField(upload_to='products/')
    name = models.CharField(max_length=255)
    description = models.TextField(unique=True)
    category = models.TextField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    brand = models.TextField(max_length=255)
    sku = models.CharField(max_length=255, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name, " ", self.sku
