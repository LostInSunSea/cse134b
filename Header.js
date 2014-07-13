function fillNavBar() {
	document.getElementsByTagName("style")[0].innerHTML += "\n\n#navBar ul {\n" +
	    "	list-style-type: none;\n" +
	    "	margin: 0px;\n" +
	    "	padding: 0px;\n" +
	    "}\n" +
		"\n" +
	    "#navBar li {\n" +
	    "   display: inline;\n" +
	    "}\n" +
		"\n" +
	    "#navBar table {\n" +
	    "   width: 700px;\n" +
	    "   border: 1px;\n" +
	    "}";

	document.getElementById("navBar").innerHTML = "    <h1 id=\"logo\"><a href=\"#\">Megalomemia</a></h1>\n" +
		"\n" +
		"    <form name=\"searchbar\" method=\"get\">\n" +
		"      <table>\n" +
		"        <tr>\n" +
		"        <td>\n" +
		"            <input type=\"hidden\" name=\"dff_view\" value=\"grid\">\n" +
		"            Search:<input type=\"text\" name=\"dff_keyword\" size=\"25\" maxlength=\"50\"> by\n" +
		"            <select name=\"dff_cat1num\" size=\"1\">\n" +
		"            <option value=\"-1\">All\n" +
		"            <option value=\"-2\">--------------\n" +
		"            <option value=\"101\">Tags\n" +
		"            <option value=\"193\">Comments\n" +
		"            <option value=\"2546\">Name\n" +
		"            </select>\n" +
		"            <input type=\"submit\" value=\"Find\">\n" +
		"        </td>\n" +
		"        </tr>\n" +
		"     </table>\n" +
		"    </form>\n" +
		"\n" +
		"	<nav id=\"main-nav\">\n" +
		"		<ul>\n" +
		"			<li><a href=\"#\">Home</a></li>\n" +
		"			<li><a href=\"#\">My Albums</a></li>\n" +
		"			<li><a href=\"#\">Tags Page </a></li>\n" +
		"			<li><a href=\"#\">Add Meme</a></li>\n" +
		"           <li><a href=\"#\">Meme Generator</a></li>\n" +
		"           <li><a href=\"#\">Group Page</a></li>\n" +
		"		</ul>\n" +
		"	</nav> ";

}