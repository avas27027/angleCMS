import React, { useEffect, useMemo } from 'react';
import { UseDisclosureReturn } from "@heroui/use-disclosure";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Link } from '@heroui/react';
import { parsePropertyValues, property } from '@/types';
import { rowHandler } from '@/routes/schemeTable';

interface TableDrawerProps {
    disclosure: UseDisclosureReturn
    title?: string;
    properties: Record<string, property>;
    initValue?: Record<string, property>;
}

const TableDrawer: React.FC<TableDrawerProps> = ({ disclosure, title, properties, initValue }) => {

    const items = useMemo(() => {
        if (initValue) {
            //parsePropertyValues(properties, initValue)
        }
        return []
    }, [initValue]);
    const { isOpen, onOpenChange } = disclosure;
    return (
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
            <DrawerContent>
                {(onClose) => (
                    <>
                        <DrawerHeader className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold">{title}</h1>
                        </DrawerHeader>
                        <DrawerBody className="p-4">
                        </DrawerBody>
                        <DrawerFooter className="flex justify-end">
                            <Link color='danger' onPress={onClose}>Cancel</Link>
                            <Button>Save</Button>
                        </DrawerFooter>
                    </>

                )}
            </DrawerContent>
        </Drawer>
    );
};

export default TableDrawer;