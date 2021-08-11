from django.views.generic.base import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin



# the order of the inheritance of classes mathers
# if i switch LoginRequiredMixin, TemplateView to :  TemplateView, LoginRequiredMixin the auth features of LoginRequiredMixin are lost
class ProfileView(LoginRequiredMixin, TemplateView):
    template_name = "accounts/profile.html"


