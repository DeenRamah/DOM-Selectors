<div>Follow</div>
<div>our</div>
<div>page</div>

<button onclick="changeColor()">To Blue</button>
<script>
  const changeColor = ()=>{
  document.querySelectorAll("div").forEach(div => div.style.color="blue")
  }
</script>
