
import React from 'react';
import { Loader, LoaderProps } from './Loader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from '@/lib/utils';

type LoaderVariant = LoaderProps['variant'];
type LoaderSize = LoaderProps['size'];
type LoaderColor = LoaderProps['color'];

const variants: LoaderVariant[] = [
  'spin', 
  'pulse', 
  'dots', 
  'gradient-bar', 
  'gradient-circle', 
  'ripple', 
  'circle-progress',
  'circle-fade',
  'sunburst',
  'circle-dots',
  'grid-dots'
];

const sizes: LoaderSize[] = ['sm', 'md', 'lg'];
const colors: LoaderColor[] = ['primary', 'secondary', 'accent', 'success', 'warning', 'error'];

export function LoaderShowcase() {
  const [activeVariant, setActiveVariant] = React.useState<LoaderVariant>('circle-progress');

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Tacitbase Loader Component</h1>
      <p className="text-center mb-8 text-muted-foreground">
        Modern, customizable, and beautiful loading indicators for your applications
      </p>

      <Tabs defaultValue="variants" className="mb-8">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="variants">Variants</TabsTrigger>
          <TabsTrigger value="sizes">Sizes</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
        </TabsList>
        
        <TabsContent value="variants">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {variants.map((variant) => (
              <Card key={variant} className={cn(
                "flex flex-col items-center justify-center p-6 hover:shadow-md transition-all",
                activeVariant === variant && "ring-1 ring-primary-400"
              )}
              onClick={() => setActiveVariant(variant)}>
                <CardHeader className="text-center">
                  <CardTitle className="capitalize text-lg">{variant.replace('-', ' ')}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center h-24">
                  <Loader variant={variant} size="md" label={`Loading...`} />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="sizes">
          <Card>
            <CardHeader>
              <CardTitle>Sizes</CardTitle>
              <CardDescription>
                Loaders are available in three different sizes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-around gap-8 py-6">
                {sizes.map((size) => (
                  <div key={size} className="flex flex-col items-center gap-2">
                    <p className="text-sm font-medium uppercase">{size}</p>
                    <Loader variant={activeVariant} size={size} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="colors">
          <Card>
            <CardHeader>
              <CardTitle>Color Variations</CardTitle>
              <CardDescription>
                Loaders can be customized with different color themes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {colors.map((color) => (
                  <div key={color} className="flex flex-col items-center gap-2">
                    <p className="text-xs font-medium capitalize">{color}</p>
                    <Loader variant={activeVariant} color={color} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Usage Example</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-background p-6 rounded border mb-4 flex flex-col gap-4">
              <Loader 
                variant={activeVariant} 
                label="Loading data..." 
                labelPosition="bottom"
              />
              
              <Loader 
                variant={activeVariant} 
                label="Processing..." 
                labelPosition="right"
              />
              
              <div className="w-full h-20 flex items-center justify-center bg-muted/50 rounded">
                <Loader variant={activeVariant} />
              </div>
            </div>
          </div>
          <div className="font-mono text-sm bg-black text-white p-4 rounded overflow-auto">
            <pre>{`// Import the Loader component
import { Loader } from './components/loader/Loader';

// Use in your component
function MyComponent() {
  return (
    <div>
      <Loader 
        variant="${activeVariant}"
        size="md"
        color="primary"
        label="Loading..."
        labelPosition="bottom"
      />
    </div>
  );
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
