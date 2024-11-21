type DeviceItemProps = {
  title: string;
  paragraph: string;
  Icon: React.ElementType;
};

function DeviceItem({ title, paragraph, Icon }: DeviceItemProps) {
  return (
    <div className="bg-dark-06 text-white p-8 rounded-lg shadow-md border-2 border-dark-15">
      <div className="flex items-center space-x-4">
        <div className="bg-dark-08 p-4 rounded-xl flex items-center justify-center">
          <Icon className="text-primary-45" size={20} />
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="mt-4 text-grey-60 text-sm">{paragraph}</p>
    </div>
  );
}

export default DeviceItem;
