const autocannon = require('autocannon');

// Change this to your actual Vercel URL
const VERCEL_URL = 'https://psycho-pool.vercel.app'; 

console.log(`🚀 Starting HTTP Load Test against Vercel CDN: ${VERCEL_URL}`);
console.log(`Simulating 1500 users requesting the website UI...`);

const instance = autocannon({
  url: VERCEL_URL,
  connections: 1500, // Number of concurrent users
  pipelining: 1,
  duration: 10 // Run the test for 10 seconds
}, console.log);

// Track the progress
autocannon.track(instance, { renderProgressBar: true });

instance.on('done', (result) => {
  console.log('\n✅ Vercel Load Test Complete!');
  console.log('--------------------------------------------------');
  console.log(`Total Requests Handled: ${result.requests.total}`);
  console.log(`Errors/Timeouts: ${result.errors}`);
  console.log(`Average Latency: ${result.latency.average} ms`);
  console.log('--------------------------------------------------');
  console.log('Note: Vercel uses a global Edge CDN. You should see 0 errors and very fast response times, proving it can easily handle the load!');
});
