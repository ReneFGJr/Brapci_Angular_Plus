rem ng build --output-path dist --base-href './'.
rem ng build --output-path dist --base-href '/'.
ng build --output-path dist --base-href '/'
echo "Copiando arquivo"
copy redirect_index.php dist\index.php
