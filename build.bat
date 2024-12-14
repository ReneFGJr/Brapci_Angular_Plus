rem ng build --output-path dist --base-href './'.
ng build --output-path dist --base-href '/dist'.
echo "Copiando arquivo"
copy redirect_index.php dist\index.php
