from django.shortcuts import render


def index(request):
    return render( request, 'sdn_ryu/index.pug', {} )
