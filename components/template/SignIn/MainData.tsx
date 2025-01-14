import { Button } from '@/components/atoms/buttons/Button'
import GoogleSignInButton from '@/components/atoms/buttons/GoogleSignInButton'
import SignLink from '@/components/atoms/buttons/SignLink'
import BaseInputField from '@/components/atoms/inputs/BaseInputField'
import { Container } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'

function MainData() {
  return (
    <div className="flex justify-center items-start mt-10 bg-gray-100">
      <Container>
        <h2 className="text-center text-2xl font-extrabold font-poppins pb-6">
          Sign In
        </h2>

        <div className="bg-white rounded-3xl md:w-[650px]  p-8 shadow-2xl">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <BaseInputField
                label="User Name"
                required
                placeholder="Your user name"
                leftSection={
                  <Image
                    src="/images/username.png"
                    alt="username"
                    width={20}
                    height={20}
                  />
                }
                name="userName"
              />
            </div>

            <div className="col-span-2">
              <BaseInputField
                label="Password"
                required
                placeholder="Your password"
                leftSection={
                  <Image
                    src="/images/key.png"
                    alt="password"
                    width={20}
                    height={20}
                  />
                }
                name="password"
              />
            </div>

            <div className='col-span-2'>
              <Link
                href="/sign-in/forget-password"
                className="underline text-[#979C9E] text-sm font-poppins"
              >
                forget your password
              </Link>
            </div>

            <div className="col-span-2">
              <Button action={() => console.log("Sign clicked")}>
                Sign In
              </Button>
            </div>
          </div>

          <p className="relative font-poppins text-center text-[#636363] text-sm p-4 before:content-[''] before:absolute before:w-[250px] before:h-[1px] before:bg-[#EAEAEA] before:left-0 before:top-1/2 after:content-[''] after:absolute after:w-[250px] after:h-[1px] after:bg-[#EAEAEA] after:right-0 after:top-1/2">
            Or
          </p>
          <GoogleSignInButton />
          <SignLink />
        </div>
      </Container>
    </div>
  )
}

export default MainData