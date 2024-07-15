<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
           alt="Your Company"/>
      <Heading as="h2">
        <span v-if="props.formType === 'signin'">
          Sign in to your account
        </span>
        <span v-else>
          Create a new account
        </span>
      </Heading>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleForm">
        <FormGroup v-if="props.formType === 'signup'" label="Full Name" name="name" type="text" autocomplete="name"
                   required labelFor="name" v-model="userFrom.name" :errorMessage="errorBag.name"/>
        <FormGroup label="Email address" name="email" type="email"
                   autocomplete="email" required labelFor="email" v-model="userFrom.email" :errorMessage="errorBag.email" />
        <div class="my-2 space-y-6">
          <FormGroup label="Password" name="password" type="password" autocomplete="password" required
                     labelFor="password" v-model="userFrom.password" :errorMessage="errorBag.password"/>
          <FormGroup v-if="props.formType === 'signup'" label="Confirm Password" name="confirm_password" type="password"
                     autocomplete="confirm_password" required labelFor="confirm_password" :errorMessage="errorBag.confirm_password"
                     v-model="userFrom.confirm_password"/>
          <div class="text-sm text-end mt-1">
            <a href="#" v-if="props.formType === 'signin'" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot
              password?</a>
          </div>
        </div>
        <div>
          <Button type="submit">
            <span v-if="props.formType==='signin'">Sign in</span>
            <span v-else>Sign up</span>
          </Button>
        </div>
      </form>

      <p v-if="props.formType === 'signin'" class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <NuxtLink to="/sign-up"><a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register
          Now</a></NuxtLink>
      </p>
      <p v-else class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        {{ ' ' }}
        <NuxtLink to="/"><a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in
          Now</a></NuxtLink>
      </p>
    </div>
  </div>
</template>
<script setup>
import FormGroup from "~/components/Form/Group.vue";
import {useState} from "#app";
import useAuth from "~/composable/useAuth.js";

const props = defineProps({
  formType: {
    type: String,
    default: "signin",
    validator: props => ["signin", "signup"].includes(props),
  }
})

const userFrom = reactive({
  name: "",
  email: "",
  password: "",
  confirm_password: ""
})

const {login, register, errorBag} = useAuth()

function handleForm() {
  if (props.formType === "signin") {
    login(userFrom)
  } else {
    register(userFrom)
  }
}
</script>