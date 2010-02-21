<?php
/**
 * Inline Text Editing 1.2 - PHP Temp
 * August 22, 2009
 * Corey Hart @ http://www.codenothing.com
 *
 * Returns a trimmed out version of the POST Data sent
 * to this page through an ajax call
 */
$text = trim(nl2br($_POST['text']));
if (isset($text) && strlen($text) > 0)
	echo $text;
else
	echo "No text was entered";
?>
