<template>
  <div
    id="contact"
    class="w-[100%] h-[100%] flex justify-center pt-[50px] pb-[30px] md:pb-[100px]"
  >
    <div class="w-[90%] md:w-[80%] sm:w-[50%] xl:w-[50%]">
      <h1
        class="flex items-center justify-center mb-[35px] font-black text-2xl"
      >
        CONTACT ME
      </h1>
      <form @submit.prevent class="bg-gray-300 rounded-[20px]">
        <div class="flex flex-col md:flex-row">
          <div class="flex md:unset flex-col items-center md:ml-[50px]">
            <p class="text-gray-900 mt-[41px]">Let's Work Together</p>
            <input
              placeholder="Full Name"
              type="text"
              v-model="name"
              required
              class="flex m-[12px] pl-[12px] py-[12px] border-0 border-gray-900 outline-none focus:ring focus:border-gray-300 my-[30px] rounded-[5px] w-[160px] md:w-[250px]"
            />
            <input
              placeholder="Email"
              type="text"
              v-model="email"
              class="flex m-[12px] pl-[12px] py-[12px] border-0 border-gray-900 outline-none focus:ring focus:border-gray-300 my-[30px] rounded-[5px] w-[160px] md:w-[250px]"
            />
            <textarea
              style="resize: none"
              placeholder="Message"
              type="text"
              v-model="message"
              class="flex m-[12px] pl-[12px] py-[12px] border-0 border-gray-900 outline-none focus:ring focus:border-gray-300 my-[30px] rounded-[5px] w-[160px] md:w-[250px]"
            ></textarea>

            <button
              type="submit"
              value="send"
              class="text-gray-600 rounded-[10px] border-2 border-gray-600 mb-[22px] w-[150px] md:w-[250px] h-[40px] outline-none my-[30px]"
            >
              Send Message
            </button>
          </div>
          <div class="mt-[82px] mr-[42px] md:mr-[39px] ml-[40px] md:ml-[75px]">
            <div
              class="p-[19px] rounded-[10px] border-2 border-gray-60 mb-[41px] hover:bg-gray-50 hover:border-gray-700"
            >
              <img
                :src="Email"
                class="w-[40px] h-[40px] flex flex-wrap justify-center items-center"
              />
              <p class="break-words md:break-normal">Kristagift@gmail.com</p>
              <a href="mailto:kristagift@gmail.com" target="_blank"
                >Send a Mail</a
              >
            </div>
            <div
              class="p-[19px] rounded-[10px] border-2 border-gray-60 hover:bg-gray-50 hover:border-gray-700 mb-[41px]"
            >
              <img
                :src="whatsappLogo"
                class="w-[50px] h-[50px] flex justify-center items-center"
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
import Email from "../assets/email.png";
import whatsapp from "../assets/WhatsApp-Logo.svg";

export default {
  data: function () {
    return {
      Email: Email,
      whatsappLogo: whatsapp,
      name: "",
      email: "",
      message: "",
    };
  },
};
</script>
