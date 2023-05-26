<h1>base64-js</h1>
<h2>Application that studies the use of Base64 encryption</h2>
<h3>How does Base64 works?</h3>
<nl>
<li>You transform the characters in the input to binary (base-2)</li>
<li>You split the stream in groups of 6 characters (6 bits)</li>
<li>You transform each of the groups into the number that group represents, using base-10</li>
<li>Convert each of this numbers into the character it represents, using the table below</li>
<li>If needed, newlines are added to keep textline below 76 chars, if a 6 numbers group is not complete, the pad symbol is added (=)</li>
</nl>
