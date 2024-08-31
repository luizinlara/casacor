FROM php:8.2-apache

RUN docker-php-ext-install mysqli
RUN a2enmod rewrite

# Modo debug
#RUN pecl install xdebug \
#    && docker-php-ext-enable xdebug
#RUN { \
#    echo 'date.timezone = UTC'; \
#    echo 'xdebug.mode=debug'; \
#    echo 'xdebug.remote_enable=1'; \
#    echo 'xdebug.remote_autostart=1'; \
#    echo 'xdebug.remote_host=host.docker.internal'; \
#} > /usr/local/etc/php/conf.d/custom.ini
#WORKDIR /var/www/html


COPY vhost.conf /etc/apache2/sites-available/000-default.conf
COPY . /var/www/html

EXPOSE 80
CMD ["apache2-foreground"]
