export interface NavItemProps extends React.ComponentProps<"li"> {
  isActive?: boolean;
  icon: React.ReactNode;
  text: string;
}
