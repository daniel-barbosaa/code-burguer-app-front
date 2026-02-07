import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';

type BagProduct = {
  id: number | string;
  quantity: number;
};

type BagContextType = {
  bagProducts: BagProduct[];
  isBagSheetOpen: boolean;
  putProdutsInBag: (product: BagProduct) => Promise<void>;
  deleteProducts: (productId: number | string) => Promise<void>;
  increaseProducts: (productId: number | string) => Promise<void>;
  decreaseProducts: (productId: number | string) => Promise<void>;
  openBagSheet: () => void;
  closeBagSheet: () => void;
};

type BagProviderProps = {
  children: ReactNode;
};

const BagContext = createContext<BagContextType | null>(null);

export function BagProvider({ children }: BagProviderProps) {
  const [bagProducts, setBagProduts] = useState<BagProduct[]>([]);
  const [isBagSheetOpen, setIsBagSheetOpen] = useState(false);

  const updateLocalStorage = async (products: BagProduct[]) => {
    await localStorage.setItem('codeburguer:bagInfo', JSON.stringify(products));
  };

  const putProdutsInBag = async (product: BagProduct) => {
    const bagIndex = bagProducts.findIndex((item) => item.id === product.id);

    let newBagProduts: BagProduct[] = [];
    if (bagIndex >= 0) {
      newBagProduts = bagProducts;
      newBagProduts[bagIndex].quantity = newBagProduts[bagIndex].quantity + 1;

      setBagProduts(newBagProduts);
    } else {
      product.quantity = 1;
      newBagProduts = [...bagProducts, product];
      setBagProduts(newBagProduts);
    }

    await updateLocalStorage(newBagProduts);
  };

  const deleteProducts = async (productId: number | string) => {
    const newBag = bagProducts.filter((item) => item.id !== productId);

    setBagProduts(newBag);
    await updateLocalStorage(newBag);
  };

  const increaseProducts = async (productId: number | string) => {
    const newBag = bagProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });

    setBagProduts(newBag);
    await updateLocalStorage(newBag);
  };

  const decreaseProducts = async (productId: number | string) => {
    const bagIndex = bagProducts.findIndex((item) => item.id === productId);

    if (bagProducts[bagIndex].quantity > 1) {
      const newBag = bagProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });
      setBagProduts(newBag);
      await updateLocalStorage(newBag);
    }
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientBagData = localStorage.getItem('codeburguer:bagInfo');

      if (clientBagData) {
        setBagProduts(JSON.parse(clientBagData));
      }
    };

    loadUserData();
  }, []);

  const openBagSheet = useCallback(() => {
    setIsBagSheetOpen(true);
  }, []);

  const closeBagSheet = useCallback(() => {
    setIsBagSheetOpen(false);
  }, []);

  return (
    <BagContext.Provider
      value={{
        putProdutsInBag,
        bagProducts,
        increaseProducts,
        decreaseProducts,
        deleteProducts,
        openBagSheet,
        closeBagSheet,
        isBagSheetOpen,
      }}
    >
      {children}
    </BagContext.Provider>
  );
}

export const useBag = () => {
  const context = useContext(BagContext);

  if (!context) {
    throw new Error('useBag deve ser com User Context!');
  }

  return context;
};
