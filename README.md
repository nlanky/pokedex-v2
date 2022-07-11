<p align="center">
	<a href="https://nlanky.github.io/pokedex-v2/" target="_blank">>>> LIVE DEMO <<<</a>
</p>
<h1>Pok&eacute;dex v2</h1>
<p>This is an attempt to recreate Ash's Pok&eacute;dex from Season 1 of the Pok&eacute;mon anime series. As the Pok&eacute;dex (pictured below) from the anime didn't provide detailed instructions, most of the functionality is just based off of things I would like to see.</p>
<p>This is version 2 which uses React, Redux Toolkit (including Redux Toolkit Query), and TypeScript.</p>
<img src="/src/features/common/assets/images/ash-pokedex-anime.png" style="width: 100%;" />
<p>All Pok&eacute;mon up to and including Generation 8 are included. There are some limitations based on the availability and format of data from Pok&eacute;API. As of writing, the maximum Pok&eacute;dex number is 898 (Calyrex).</p>
<h2>Instructions</h2>
<img src="/src/features/common/assets/images/annotated-pokedex.jpg" style="width: 100%;" />
<ol>
	<li>Toggle the walkthrough at any time using this button</li>
	<li>Go to the previous Pok&eacute;mon (if applicable)</li>
	<li>Go to the next Pok&eacute;mon (if applicable)</li>
	<li>Go to the previous sprite (if applicable)</li>
	<li>Go to the next sprite (if applicable)</li>
	<li>Play the Pok&eacute;mon's cry</li>
	<li>Go to the first sprite</li>
	<li>Go to the last sprite</li>
	<li>Search for a Pok&eacute;mon using their name or Pok&eacute;dex number</li>
	<li>Use the D-pad as an alternative to the arrows on the left display</li>
	<li>Show flavour text (description)</li>
	<li>Show stats</li>
	<li>Show height and weight</li>
	<li>Show type effectiveness when being attacked</li>
	<li>Show abilities</li>
	<li>Show encounter locations</li>
	<li>Show evolution chain</li>
	<li>Show moves</li>
	<li>Show varieties and forms</li>
	<li>Show egg groups</li>
	<li>Scroll the right display up</li>
	<li>Scroll the right display down</li>
	<li>Scroll to the top of the right display</li>
	<li>Scroll to the bottom of the right display</li>
	<li>Go to a random Pok&eacute;mon</li>
</ol>
<h2>Potential Improvements</h2>
<ul>
	<li>Add ability to change language. Some of this work has been done but translations sometimes not available from API.</li>
</ul>
<h2>Changelog</h2>
<p>
	<b>v1.0.6</b><br />
	Fixed bug in walkthrough where next Pok&eacute;mon and next sprite buttons were not referenced correctly.
</p>
<p>
	<b>v1.0.5</b><br />
	Fixed bug in walkthrough where sprite cry button was not referenced correctly.
</p>
<p>
	<b>v1.0.4</b><br />
	Fixed issue where user could click on previous or next sprite/Pok&eacute;mon button even if there was no sprite/Pok&eacute;mon to show.
</p>
<p>
	<b>v1.0.3</b><br />
	Fixed issue where immunity from first type of dual-typed Pok&eacute;mon was being overwritten by second type.
</p>
<p>
	<b>v1.0.2</b><br />
	Fix cries not playing due to different file path on deployed app.
</p>
<p>
	<b>v1.0.1</b><br />
	<ul>
		<li>Update README to match new walkthrough descriptions.</li>
		<li>Added GitHub Pages.</li>
	</ul>	
</p>
<p>
	<b>v1.0.0</b><br />
	Initial commit of Pok&eacute;dex v2 app.
</p>
