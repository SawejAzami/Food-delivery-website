
const Success=()=>{

    return(
        <>
            <div class="bg-purple-50 flex items-center justify-center min-h-screen">

  <div class="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md border border-purple-100">
    
    <div class="flex justify-center mb-6">
      <div class="bg-purple-100 p-4 rounded-full">
        <svg class="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
    </div>

    <h1 class="text-2xl font-bold text-purple-700 mb-2">
      Payment Successful
    </h1>

    <p class="text-gray-600 mb-6">
      Your payment has been completed successfully. Thank you for your order!
    </p>

    <a href="/" 
       class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md">
      Go to Homepage
    </a>

  </div>

</div>
        </>
    )
}
export default Success;