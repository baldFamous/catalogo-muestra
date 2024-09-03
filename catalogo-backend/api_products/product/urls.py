from django.urls import path
from .views import ProductCreateView, ProductListView, ProductDetailView, ProductFilterView

urlpatterns = [
    path('all/', ProductListView.as_view(), name='product-list'),
    path('create/', ProductCreateView.as_view(), name='product-create'),
    path('<int:id>/', ProductDetailView.as_view(), name='product-detail'),
    path('filter/', ProductFilterView.as_view(), name='product-filter'),
]