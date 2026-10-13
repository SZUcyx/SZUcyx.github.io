import { Component, type ReactNode } from 'react'

export class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    if (this.state.failed) {
      return (
        <div className="gaussian-viewer-overlay scene-unavailable" role="status">
          <span>3D preview unavailable.<br />You can still browse the project details.</span>
        </div>
      )
    }
    return this.props.children
  }
}
