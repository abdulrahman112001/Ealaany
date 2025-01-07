import { Label } from "@/components/atoms/Label";
import { Group, Image, Menu, UnstyledButton } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";
import classes from "/styles/LanguagePicker.module.css";


interface FlagsInputFieldProps {
  label?: string
  required?: boolean
}

const data = [
  { label: "Ryadah", image: "/images/flag.png" },
  { label: "USA", image: "/images/uk-flag.png" },
];

export function FlagsForm({
  label,
  required
}: FlagsInputFieldProps) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      leftSection={<Image src={item.image} width={18} height={18} alt="image" />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (

    <div>
      <Label htmlFor="name">
        {label}
        {required && <span className="mx-1">*</span>}
      </Label>

      <Menu
        onOpen={() => setOpened(true)}
        onClose={() => setOpened(false)}
        radius="md"
        width="target"
        withinPortal
      >
        <Menu.Target>
          <UnstyledButton
            className={classes.control}
            data-expanded={opened || undefined}
          >
            <Group gap="xs">
              <Image src={selected.image} width={22} height={22} alt="image" />
              <span className={classes.label}>{selected.label}</span>
            </Group>
            <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>{items}</Menu.Dropdown>
      </Menu>
    </div>
  );
}
