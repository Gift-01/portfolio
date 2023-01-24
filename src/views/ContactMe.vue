<template>
  <div class="w-[100%] h-[100%] flex justify-center pt-[50px]">
    <div class="w-[50%]">
      <form @submit.prevent class="bg-gray-600 rounded-[20px]">
        <div class="flex flex-col md:flex-row">
          <div class="ml-[50px]">
            <p class="text-gray-50 mt-[41px]">Let's Work Together</p>
            <p class="text-gray-50">Contact me</p>
            <input
              placeholder="Full Name"
              type="text"
              class="flex m-[12px] py-[12px] border-0 border-gray-900 outline-none focus:ring focus:border-gray-300 m-[30px] rounded-[5px] w-[250px]"
            />
            <input
              placeholder="Email"
              type="text"
              class="flex m-[12px] py-[12px] border-0 border-gray-900 outline-none focus:ring focus:border-gray-300 m-[30px] rounded-[5px] w-[250px]"
            />
            <textarea
              style="resize: none"
              placeholder="Message"
              type="text"
              class="flex m-[12px] py-[12px] border-0 border-gray-900 outline-none focus:ring focus:border-gray-300 m-[30px] rounded-[5px] w-[250px]"
            ></textarea>

            <button
              type="submit"
              class="text-gray-50 rounded-[10px] border-2 border-gray-60 mb-[22px] w-[250px] h-[40px] outline-none m-[30px]"
            >
              Send Message
            </button>
          </div>
          <div class="mt-[82px] mr-[39px] ml-[75px]">
            <div
              class="p-[19px] rounded-[10px] border-2 border-gray-60 mb-[41px] hover:bg-gray-50 hover:border-gray-700"
            >
              <img
                :src="email"
                class="w-[40px] h-[40px] flex justify-center items-center"
              />
              <p>Kristagift@gmail.com</p>
              <a href="mailto:kristagift@gmail.com" target="_blank"
                >Send a Mail</a
              >
            </div>
            <div
              class="p-[19px] rounded-[10px] border-2 border-gray-60 hover:bg-gray-50 hover:border-gray-700"
            >
              <img
                :src="whatsappLogo"
                class="w-[50px] h-[50px] justify-center items-center"
              />
              <p>+2348108082491</p>
              <a
                href="https://wa.me/08108082491? text=hi"
                target="_blank"
                class="hover:underline"
              >
                Send a Message</a
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import email from "../assets/email.png";
import whatsapp from "../assets/WhatsApp-Logo.svg";

export default {
  data: function () {
    return {
      email: email,
      whatsappLogo: whatsapp,
    };
  },
};
</script>
