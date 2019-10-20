docker stop rabbit13
#Subir o container do rabbit
echo '>>>>>>>>>>>>>>INICIANDO O CONTAINER RABBITMQ<<<<<<<<<<<<<<<<<<<<'
echo ' '
docker start rabbit13
docker ps
echo ' '
echo '>>>>>>>>>>>>>>O CONTAINER RABBITMQ ESTÁ PRONTO<<<<<<<<<<<<<<<<<<<<'
echo ' '
sleep 5
echo '>>>>>>>>>>>>>>SUBINDO MODULOS DA APLICACAO<<<<<<<<<<<<<<<<<<<<'
echo ' '
java -jar ./zuul-gateway/target/zuul-gateway-1.0.0-SNAPSHOT.jar &
java -jar ./sca-ativos/target/sca-ativos-1.0.0-SNAPSHOT.jar &
java -jar ./sca-barragens/target/sca-barragens-1.0.0-SNAPSHOT.jar &
java -jar ./sca-seguranca-comunicao/target/sca-seguranca-comunicao-1.0.0-SNAPSHOT.jar
echo ' ' 
echo '>>>>>>>>>>>>>>SUBINDO MODULOS DA APLICACAO<<<<<<<<<<<<<<<<<<<<'