tag=latest
organization=eiderdiazm95
image=hackershack-website-tutorial

build:
	docker build --force-rm $(options) -t hackershack-website-tutorial:latest .

build-prod:
	$(MAKE) build options="--target production"


compose-start:
	docker-compose up --remove-orphans $(options)

compose-stop:
	docker-compose down --remove-orphans $(options)



compose-manage-py:
	docker-compose run --rm $(options) website python manage.py $(cmd)

start-server:
	python manage.py runserver 0.0.0.0:80

migrate:
	python manage.py migrate

push:
	docker tag $(image):latest $(organization)/$(image):$(tag)
	docker push $(organization)/$(image):$(tag)

helm-deploy:
	helm upgrade --install  django-tutorial .\helm\django-website\