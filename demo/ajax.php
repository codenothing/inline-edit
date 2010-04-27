<?php
/**
 * Inline Text Editing 1.3 - PHP Temp
 * April 26, 2010
 * Corey Hart @ http://www.codenothing.com
 *
 * Returns a trimmed out version of the POST Data sent
 * to this page through an ajax call
 */
$text = trim( nl2br( $_POST['text'] ) );
if ( isset( $text ) && strlen( $text ) > 0 ) {
	echo $text;
} else {
	echo "No text was entered";
}
?>
