<script>
var aleato = Math.floor( Math.random() * 10 );
var _textarea = document.getElementById( &#39;mitextarea&#39; );

switch ( aleato ) {
    
   case 0:
       _textarea.innerHTML = &quot;mira la nueva&quot;;
        break;
   case 1:
       _textarea.innerHTML = &quot;aqui va un texto;&quot;;
       break;
   case 2:
       _textarea.innerHTML = &quot;Gracias:&quot;;
       break;
   case 3:
       _textarea.innerHTML = &quot;aqui va otro aleatorio:&quot;;
       break;
   case 4:
      _textarea.innerHTML = &quot;aqui Otro:&quot;;
      break;
   default:
      _textarea.innerHTML = &quot;por ultimo aqui :&quot;;
      break;

}
</script>
