var content = "<pre><code class=\"javascript\">var function={}\neval(function)</code></pre>";
var content1 = "<pre><code>var function={}\neval(function)</code></pre>";
var content2 = "<pre><code class=\"javascript showln\">var function={}\neval(function)</code></pre>";
var test = '<pre><code>var function={console.log("hello")}\n</code></pre>\n<pre><code class="javascript ln_off">var function={};//test </code></pre>';
var test1 = "<pre><code class='javascript ln_on'>var test = function={\n  \n};</code></pre>"
var hljs = require('highlight');
var hl = hljs.Highlight;
var output;
//output = hl(content, false, true);
//console.log(output);
//output = hl(content1, false, true);
//console.log(output);
//output = hl(content2, false, true);
//console.log(output);
//output = hl(test, false, true);
//console.log(output);
output = hl(test1, false, true);
//console.log(output);
