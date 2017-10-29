describe('test reducer existance', () => {
    it('should handle initial stat', () => {
        expect(
            appReducer(undefined, {})
        ).toEqual(initialState)
    })
})