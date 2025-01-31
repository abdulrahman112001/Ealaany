import {
  Box,
  Burger,
  Button,
  Center,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  useMantineTheme,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import Image from "next/image"
import Link from "next/link"
import classes from "../../styles/Navbar.module.css"

export default function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const theme = useMantineTheme()

  return (
    <Box className="pb-0 md:pb-10">
      <header className={`${classes.header} z-50 relative  `}>
        <Group justify="space-between" h="100%">
          <Link href="/" passHref>
            <Image
              src="/images/logo.png"
              alt="logo"
              className="md:ml-16"
              width={195}
              height={36}
            />
          </Link>
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      About us
                    </Box>
                  </Center>
                </a>
              </HoverCard.Target>
            </HoverCard>
            <a href="#" className={classes.link}>
              Services
            </a>
            <a href="#" className={classes.link}>
              FAQs
            </a>
            <a href="#" className={classes.link}>
              Contact us
            </a>
          </Group>
          <Group visibleFrom="sm">
            <Link href="/sign-up" passHref>
              <Button
                component="a"
                variant="filled"
                styles={{
                  root: {
                    borderRadius: "12px",
                    backgroundColor: "#D83232",
                    fontSize: "16px",
                  },
                }}
              >
                + Sign up
              </Button>
            </Link>
            <Link
              href="/sign-in"
              className="text-[#D83232] text-base font-bold mr-10"
            >
              log in
            </Link>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link} onClick={closeDrawer}>
            Home
          </a>
          <a href="#" className={classes.link} onClick={closeDrawer}>
            About us
          </a>
          <a href="#" className={classes.link} onClick={closeDrawer}>
            Services
          </a>
          <a href="#" className={classes.link} onClick={closeDrawer}>
            FAQs
          </a>
          <a href="#" className={classes.link} onClick={closeDrawer}>
            Contact us
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Link href="/sign-up" passHref>
              <Button
                component="a"
                variant="filled"
                styles={{
                  root: {
                    borderRadius: "12px",
                    backgroundColor: "#D83232",
                    fontSize: "16px",
                  },
                }}
                onClick={closeDrawer}
              >
                + Sign up
              </Button>
            </Link>
            <Link
              href="sign-in"
              className="text-[#D83232] text-base font-bold mr-10"
              onClick={closeDrawer}
            >
              Log in
            </Link>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}
