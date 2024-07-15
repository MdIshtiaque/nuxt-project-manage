<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
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
      <form class="space-y-6" action="#" method="POST">
        <FormGroup v-if="props.formType === 'signin'" label="Email address" name="email" type="email" autocomplete="email" required labelFor="email" />
        <FormGroup v-if="props.formType === 'signup'" label="Full Name" name="name" type="text" autocomplete="name" required labelFor="name" />
        <FormGroup v-if="props.formType === 'signup'" label="Email address" name="email" type="email" autocomplete="email" required labelFor="email" />
        <div class="my-2 space-y-6">
            <FormGroup label="Password" name="password" type="password" autocomplete="password" required labelFor="password" />
            <FormGroup v-if="props.formType === 'signup'" label="Confirm Password" name="confirm_password" type="password" autocomplete="confirm_password" required labelFor="confirm_password" />
            <div class="text-sm text-end mt-1">
              <a href="#" v-if="props.formType === 'signin'" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
        </div>
        <div>
          <Button type="submit">
            <span v-if="props.formType==='signin'" >Sign in</span>
            <span v-else>Sign up</span>
          </Button>
        </div>
      </form>

      <p v-if="props.formType === 'signin'" class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <NuxtLink to="/sign-up"><a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register Now</a></NuxtLink>
      </p>
      <p v-else class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        {{ ' ' }}
        <NuxtLink to="/"><a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in Now</a></NuxtLink>
      </p>
    </div>
  </div>
</template>
<script setup>
  import FormGroup from "~/components/Form/Group.vue";
  const props = defineProps({
    formType: {
      type: String,
      default: "signin",
      validator: props => ["signin", "signup"].includes(props),
    }
  })
</script>