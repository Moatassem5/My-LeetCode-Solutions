class Solution(object):
    # I'm going to use sliding window technique
    def maxProfit(self, prices):
       l,r = 0,1
       # l for buying r for selling
       maxgain = 0
       while r < len(prices):
           if prices[l] < prices[r]:
               profit = prices[r] - prices[l]
               maxgain = max(maxgain,profit)
           else:
               l = r
           r+=1
       return maxgain

