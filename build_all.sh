echo '>>>>>>>>>>>>>>INICIANDO BUILDS DOS MODULOS<<<<<<<<<<<<<<<<<<<<'
echo ' '
mvn -f ./eureka-service/pom.xml clean package -Dmaven.test.skip=true
mvn -f ./zuul-gateway/pom.xml clean package -Dmaven.test.skip=true
rm ./sca-ativos/src/main/java/com/sca/ativo/model/*_.java
mvn -f ./sca-ativos/pom.xml clean package -Dmaven.test.skip=true
mvn -f ./sca-barragens/pom.xml clean package -Dmaven.test.skip=true
mvn -f ./sca-seguranca-comunicao/pom.xml clean package -Dmaven.test.skip=true
echo ' '
echo '>>>>>>>>>>>>>>FIM BUILDS DOS MODULOS<<<<<<<<<<<<<<<<<<<<'