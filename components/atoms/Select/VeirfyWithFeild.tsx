import { Group, Image, Menu, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react';
import { BsQuestionCircle } from "react-icons/bs";
import classes from "/styles/LanguagePicker.module.css";


const data = [
    { label: 'selection item', image: '/images/profile.png' },
    { label: 'SMS', image: '/images/sms.png' },
    { label: 'Whatsapp', image: '/images/whatsapp.png' },
    { label: 'Email', image: '/images/Emaail.png' },
];

const VeirfyWithFeild = () => {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState(data[0]);
    const items = data.map((item) => (
        <Menu.Item

            leftSection={<Image src={item.image} width={18} height={18} />}
            onClick={() => setSelected(item)}
            key={item.label}
        >
            {item.label}
        </Menu.Item>
    ));

    return (
        <Menu
            onOpen={() => setOpened(true)}
            onClose={() => setOpened(false)}
            radius="md"
            width="target"
            withinPortal
        >
            <Menu.Target>
                <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
                    <Group gap="xs">
                        <Image src={selected.image} width={22} height={22} />
                        <span className={`${classes.label} ${selected && selected.label !== "selection item" ? classes.selected : ""
                            }`}
                        >{selected.label}</span>
                    </Group>
                    <div className='flex items-center justify-center'><IconChevronDown size={16} className={classes.icon} stroke={1.5} />
                        <BsQuestionCircle size={12} className='text-[#868e96] ms-[4px]' />   </div>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
    );
}

export default VeirfyWithFeild
