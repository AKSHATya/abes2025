// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

void pattern(int n){
    for(int i=1; i<=n; i++){
        for(int j=i; j<n; j++){
            cout<<" ";
        }
        
        for(int j=1; j<=(2*i-1);j++){
            cout<<"*";
        }
        cout<<endl;
    }
    for(int i=n-1; i>=1; i--){
        for(int j=n; j>i; j--){
            cout<<" ";
        }
        for(int j=1; j<=(2*i-1);j++){
            cout<<"*";
        }
        cout<<endl;
    }
}
int main() {
    
    int n =5;
    
    pattern(n);

    return 0;
}