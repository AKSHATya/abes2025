// Online C++ compiler to run C++ program online
#include <iostream>
#include<bits/stdc++.h>
using namespace std;

bool checkPrime(int num) {
    if (num <= 1) return false;
    if (num == 2) return true;
    if (num % 2 == 0) return false;
    for (int i = 3; i * i <= num; i += 2) {
        if (num % i == 0) return false;
    }
    return true;
}

vector<int> isPrime(vector<int>& ans) {
    int mx = -1, mn = -1;
    int max_idx=0, min_idx=0;
    for (int i = 0; i < ans.size(); i++) {
        
        if (checkPrime(ans[i])) {
            if (mx == -1 || ans[i] > mx){ 
                mx = ans[i];
                max_idx = i;
            }
            if (mn == -1 || ans[i] < mn){
             min_idx = i;    
             mn = ans[i];
            }
        }
    }
    vector<int> result;
    if (mx != -1){ 
        result.push_back(mx);
        result.push_back(max_idx);
    }
    if (mn != -1){
        
     result.push_back(mn);
     result.push_back(min_idx);
    }
    return result;
}
int main() {
    
 vector<int> ans;
 int n ;
 cin>>n;
 for(int i=0; i<n; i++){
     int num;
     cin>>num;
     ans.push_back(num);
 }
  vector<int> result=isPrime(ans);
  if(result.size()<4){
      return -1;//no prime
  }
  int max_idx = result[1];
  int min_idx = result[3];

  if(max_idx!=0 && min_idx!=0){
      swap(ans[max_idx], ans[0]);
      
  }else if(min_idx==0){
      swap(ans[max_idx], ans[1]);
      swap(ans[min_idx], ans[n-1]);
  }
  sort(ans.begin()+1,ans.begin()+n-1,greater<int>());
  
  
  for(int i=0; i<n; i++){
      cout<<ans[i]<<" ";
  }

    return 0;
}