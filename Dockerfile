# Use a imagem base do Nginx
FROM nginx:alpine

# Copie os arquivos HTML, CSS e JS para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Exponha a porta 80 para acessar o servidor
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
