import AddNewCard from '../components/AddNewCard';
import CardSelection from '../components/CardSelection';

const PaymentPage = () => {
    return (
        <div className="max-w-[500px] h-full mx-auto p-5 sm:p-2 font-sans bg-[#f2f2f2] min-h-screen">
            <CardSelection />
            <AddNewCard />
        </div>
    );
};

export default PaymentPage;
