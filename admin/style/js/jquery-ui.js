<?php
if (isset($_GET['user_name'])&&!empty($_GET['user_name'])){
echo $_user_name=$_GET['user_name'];

}

?>
<form action="index.php" method="GET">
Name:<input type="text" name="user_name"><br>
<input type="submit" value="submit">
</form>
