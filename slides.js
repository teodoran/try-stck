var slides = [
`<pre style="color:yellow;">
+----------------------------------------+
|                                        |
|   Now what? Will this work?            |
|   -------------------------            |
|                                        |
|   * Maybe?                             |
|   * Yes!                               |
|   * ???                                |
|   * Profit                             |
|                                        |
|                                        |
+----------------------------------------+
</pre`, // http://www.messletters.com/en/big-text/ style "small"
`<pre style="color:yellow;">

   _  _                   _ 
  | || |  ___   __ _   __| |  ___   _ _
  | __ | / -_) / _  | / _  | / -_) | '_|
  |_||_| \\___| \\__,_| \\__,_| \\___| |_|

   __  __            _   _  
  |  \\/  |  ___   __| | (_)  _  _   _ __
  | |\\/| | / -_) / _  | | | | || | | '  \\
  |_|  |_| \\___| \\__,_| |_| \\__,_| |_|_|_|


</pre`,
`<img style="height:15em;" src="images/moore.jpg">`,
`<img style="height:15em;" src="images/setun.jpg">`,
`<pre style="color:yellow;">
+----------------------------------------+
|                                        |
|   Project Euler problem two            |
|   -------------------------            |
|                                        |
|   * Sum all Fibonacci numbers          |
|   * Below four million                 |
|                                        |
|                                        |
|                                        |
|                                        |
+----------------------------------------+
</pre`,
`<pre style="color:yellow;">
# next-fib
	2dup +
!
</pre`,
`<pre style="color:yellow;">
# is-even
	dup 2 % 0 =
!

# next-is-zero
	dup 0 =
!
</pre`,
`<pre style="color:yellow;">
# fib-under-4m
	next-fib
	dup 4000000 > ?
		fib-under-4m
	: . ;
!
</pre`,
`<pre style="color:yellow;">
# sum-if-even
	swap is-even ?
		+
	: . ;
	swap next-is-zero ?
		.
    : swap sum-if-even ;
!
</pre`,
`<pre style="color:yellow;">
0 1 2 fib-under-4m sum-if-even !
</pre`,
];