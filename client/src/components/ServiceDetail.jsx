import React from 'react'

function ServiceDetail() {
  return (
   <main className="main-content">
    <div className="container">
      <ol style={{"--length": 5}} role="list">
	<li style={{"--i":1}}>
		<h3>Discovery and assessment</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.</p>
	</li>
	<li style={{"--i" : 2}}>
		<h3>Introduction</h3>
		<p>In this course, you will learn about JavaScript data types, built-in methods, and variables.</p>
	</li>
	<li style={{"--i":3}}>
		<h3>Creating your claim</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.</p>
	</li>
	<li style={{"--i":4}}>
		<h3>Approvals and submission</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.</p>
	</li>
	<li style={{"--i": 5}}>
		<h3>Receiving your benefit</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.</p>
	</li>
</ol>
    </div>
         </main>
  )
}

export default ServiceDetail